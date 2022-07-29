import sanityClient from '@sanity/client';

export const client = sanityClient({
	projectId: 'wzdhkgbu',
	dataset: 'production',
	apiVersion: 'v1',
	token:
		'skrZYDtnslz0lkScqeruAXGRgmTSZGA53SyeSkSRhjBxgitVYDR8ExC2EiCT9dSwzgeSfKeTmU3CZzGGNQqt2UwEqKv6Y6mdWQPcFo5k3tcFpiFVteHWZ17YPfFxAx085EOlfdOgJ3l1F3bM0QjuAkKBIJNc18LVHBnQGMFlBMjK6WdO1eHA',
	useCdn: false,
});
