// Server-side source of truth for plan pricing/capacity - mirrors
// PLAN_PRICES/PLAN_CAPACITY in index.html. The client tells us which plan and
// duration a consultancy picked, but the actual amount charged is always
// looked up from this table on the server, never trusted from the request
// body - otherwise anyone could POST { amount: 1 } and buy Enterprise for
// Rs. 1.
const PLAN_PRICES = {
  30: { Starter: 5000, Growth: 8000, Enterprise: 24000 },
  90: { Starter: 12000, Growth: 20000, Enterprise: 60000 },
  365: { Starter: 45000, Growth: 72000, Enterprise: 216000 },
};

const PLAN_CAPACITY = { Starter: 10, Growth: 25, Enterprise: 100 };

function resolveAmount(planName, durationDays) {
  const byDuration = PLAN_PRICES[Number(durationDays)];
  if (!byDuration) return null;
  const amount = byDuration[planName];
  if (!amount) return null;
  return amount;
}

module.exports = { PLAN_PRICES, PLAN_CAPACITY, resolveAmount };
