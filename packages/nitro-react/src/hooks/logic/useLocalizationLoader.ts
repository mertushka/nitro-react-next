import { useLocalizationStore } from '#base/stores';
import { BadgePointLimitsEvent } from '@nitrodevco/nitro-renderer';
import { useEffect } from 'react';
import { useMessageEvent } from '../events';
import { useConfigValue } from '../utils';

export const useLocalizationLoader = () =>
{
    const setLocalization = useLocalizationStore(state => state.setLocalization);
    const setBadgePointLimits = useLocalizationStore(state => state.setBadgePointLimits);
    const localizationNeedsUpdate = useLocalizationStore(state => state.localizationNeedsUpdate);
    const localizationUrl = useConfigValue<string | string[]>('gamedata.urls.externalTexts');

    const processJson = (data: Record<string, string>) =>
    {
        const resolveReferences = (data: Record<string, string>) =>
        {
            const resolvedConfig = { ...data };

            const getValue = (key: string) => resolvedConfig[key] ?? `\${${key}}`;

            for (const key in resolvedConfig)
            {
                if (key === '')
                {
                    delete resolvedConfig[key];

                    continue;
                }

                if (typeof resolvedConfig[key] === "string") resolvedConfig[key] = resolvedConfig[key].replace(/\$\{([^}]+)\}/g, (_, refKey) => getValue(refKey));
            }

            return resolvedConfig;
        }

        return resolveReferences(data);
    }

    useMessageEvent<BadgePointLimitsEvent>(BadgePointLimitsEvent, event =>
    {
        const parser = event.getParser();

        const data: Record<string, number> = {};

        for (const data of parser.data)
        {
            data[data.badgeId] = data.limit;
        }

        setBadgePointLimits(data);
    });

    useEffect(() =>
    {
        if (!localizationNeedsUpdate) return;

        let urls: string[] = [];

        if (Array.isArray(localizationUrl))
        {
            localizationUrl.forEach((url: string) => urls.push(url));
        }
        else
        {
            urls.push(localizationUrl);
        }

        const load = async (urls: string[]) =>
        {
            let data: Record<string, any> = {};

            for (const url of urls)
            {
                try
                {
                    const response = await fetch(url);
                    const responseData = await response.json() as Record<string, any>;

                    data = { ...data, ...responseData };
                }

                catch (err)
                {
                    console.error(`Trouble loading the localization using: ${url}`, err.message);
                }
            }

            setLocalization(processJson({ ...data }));
        }

        load(urls);
    }, [localizationNeedsUpdate]);
}
