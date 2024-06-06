import { SubscriptionPlan as TSubscriptionPlan } from "../api/subscriptionPlan/SubscriptionPlan";

export const SUBSCRIPTIONPLAN_TITLE_FIELD = "jsonPath";

export const SubscriptionPlanTitle = (record: TSubscriptionPlan): string => {
  return record.jsonPath?.toString() || String(record.id);
};
