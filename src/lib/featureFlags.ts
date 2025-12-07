export type FeatureFlags = {
  premiumEnabled: boolean;
  stripeEnabled: boolean;
  searchProvider: "postgres" | "meilisearch" | "typesense" | "elastic";
};

export const featureFlags: FeatureFlags = {
  premiumEnabled: true,
  stripeEnabled: false,
  searchProvider: "postgres",
};
