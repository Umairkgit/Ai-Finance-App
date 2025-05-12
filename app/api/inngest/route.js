import { serve } from "inngest/next";
import { checkBudgetAlert, generateMonthlyReports, processRecurringTransaction, triggerRecurringTransactions } from "@/lib/inngest/functions";
import { inngest } from "@/lib/inngest/client";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        checkBudgetAlert,
        triggerRecurringTransactions,
        processRecurringTransaction,
        generateMonthlyReports
    ],
});
