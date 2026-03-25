// Financial Calculator JavaScript Functionality

// Function to convert currency rates
function convertCurrency(amount, rate) {
    return amount * rate;
}

// Function to calculate present value
function calculatePresentValue(futureValue, rate, periods) {
    return futureValue / Math.pow((1 + rate), periods);
}

// Function to calculate future value
function calculateFutureValue(presentValue, rate, periods) {
    return presentValue * Math.pow((1 + rate), periods);
}

// Function to calculate annuities
function calculateAnnuity(payment, rate, periods) {
    const r = rate / 12;
    return payment * ((1 - Math.pow((1 + r), -periods)) / r);
}

// Function to generate timelines
function generateTimeline(startDate, periods) {
    const timeline = [];
    for (let i = 0; i < periods; i++) {
        const newDate = new Date(startDate);
        newDate.setMonth(startDate.getMonth() + i);
        timeline.push(newDate.toISOString().split('T')[0]); // Format YYYY-MM-DD
    }
    return timeline;
}

// Function to calculate amortization table
function calculateAmortization(principal, annualRate, years) {
    const monthlyRate = annualRate / 12 / 100;
    const numberOfPayments = years * 12;
    const monthlyPayment = principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    const amortizationTable = [];

    let balance = principal;
    for (let i = 1; i <= numberOfPayments; i++) {
        const interest = balance * monthlyRate;
        const principalPayment = monthlyPayment - interest;
        balance -= principalPayment;
        amortizationTable.push({
            paymentNumber: i,
            interest: interest.toFixed(2),
            principal: principalPayment.toFixed(2),
            balance: balance < 0 ? 0 : balance.toFixed(2)
        });
    }
    return amortizationTable;
}

// Helper function to format currency
function formatCurrency(value) {
    return '\u20B9' + value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); // Colombian peso symbol
}

// Example Usage:
// console.log(formatCurrency(123456.789)); // Outputs formatted currency
// console.log(calculateFutureValue(1000, 0.05, 10)); // Future Value example
