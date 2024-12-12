/// for purposes
console.log("ppp.js loaded successfully");
var paying = ["paying", "compensating", "gifting", "rewarding"];
var getting = [
  "receiving",
  "getting",
  "pocketing",
  "gaining",
  "getting paid",
  "getting compensated",
  "being gifted",
  "being rewarded with",
];
var employees = ["people", "workers", "employees"];
var person = ["person", "worker", "employee"];
var single = [
  "a single",
  "one",
  "just one",
  "only one",
  "a solo",
  "an independent",
];

var paying_off = ["paying off", "paying for", "paying"];
var paid_off = ["paid", "paid off", "paid for"];

var are = ["are you gonna", "will you", "can you", "are you going to"];
var pay = [
  "pay",
  "pay for",
  "pay me for",
  "give me money for",
  "compensate me for",
  "gift me money for",
  "give me a grant for",
];
var too = ["too", "as well", "in addition", "likewise"];

var insurance = [
  "insurance",
  "health plans",
  "health insurance",
  "insurance plans",
];

var company = [
  "company",
  "corporation",
  "business",
  "enterprise",
  "firm",
  "establishment",
];
var zero = ["zero", "no", "not a single"];

var franchise = ["franchise", "franchisee"];
var big = [
  "big",
  "sizeable",
  "rich",
  "high-profit",
  "wealthy",
  "well off",
  "loaded",
  "major",
];

var what = [
  "what exactly",
  "what",
  "who knows what",
  "God knows what",
  "what, if anything",
  "whatever",
];

/// for context

var doge = [
  "D.O.G.E.",
  "DOGE",
  "Department of Government Efficiency",
  "DOGE Department",
];
var lmk = [
  "let me know",
  "let us know",
  "tell me",
  "tell us",
  "alert me as to",
  "alert us as to",
  "investigate",
  "find out",
  "check into",
  "examine",
  "explore",
];
var earned = ["hard-earned", "precious", "valuable", "American", "our"];
var tax = ["tay-payer money", "tax-payer funds", "taxes", "tax funds"];
var went = [
  "went to",
  "were delivered to",
  "were sent to",
  "were given to",
  "were gifted to",
  "were handed away to",
  "were handed out to",
];
var so_that = [
  "just so the money could go to",
  "when they put it to",
  "to be used for",
  "for",
  "for the purpose of",
];
var wasnt = ["wasn't", "was not"];
var very = ["all that", "very", "quite", "particularly", "super"];
var when_you = ["when you", "the time they", "when they", "the time you"];
var ppp = [
  "",
  "paycheck protection",
  "paycheck protection program",
  "PPP",
  "paycheck protection plan",
];
var which = [
  "and got it",
  "that you said was",
  "which ended up being",
  "that became a grant because it was",
  "that was",
  "but was",
];

///
var ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
var tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
var teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
var emailSubjects = [
  "Inquiry Regarding Corporate Subsidies in Recent Budget",
  "Request for Transparency on Government Corporate Handouts",
  "Questioning the Necessity of Corporate Tax Breaks",
  "Seeking Clarification on Subsidies for Corporations",
  "Concern Over Excessive Handouts to Private Companies",
  "Request for Information: Corporate Incentives in Government Policy",
  "Inquiry About Accountability in Corporate Subsidy Programs",
  "Alert: Concerns About Misuse of Funds in Corporate Handouts",
  "Questioning the Justification for Corporate Bailouts",
  "Seeking Details on Recent Corporate Financial Assistance",
  "Request for Review: Public Funding Allocated to Corporations",
  "Insight Needed: Corporate Handouts and Their Economic Impact",
  "Challenging the Need for Taxpayer-Funded Corporate Subsidies",
  "Follow-Up on Large-Scale Corporate Incentives",
  "Call for Transparency: Government Deals with Private Sector",
  "Request for Explanation: Corporate Handouts in Public Records",
  "Inquiry About Criteria for Awarding Corporate Subsidies",
  "Highlighting Concerns Over Favoritism in Corporate Support",
  "Seeking Audit of Public Funds Directed to Private Companies",
  "Concern Over Unchecked Corporate Tax Breaks",
  "Request for Analysis of Economic Impact of Corporate Handouts",
  "Alert: Mismanagement of Corporate Subsidy Allocations",
  "Request for Accountability on Corporate Welfare Policies",
  "Transparency Needed: Rationale for Large Corporate Payouts",
  "Inquiry on Oversight of Corporate Grants and Subsidies",
  "Concerns About Public Cost of Corporate Financial Support",
  "Request for Justification: Taxpayer Money Supporting Corporations",
  "Follow-Up: Details on Recent Corporate Bailout Measures",
  "Investigation Request: Questionable Corporate Incentive Policies",
  "Request for Breakdown of Corporate Subsidy Expenditures",
  "Concern Over Corporate Tax Loopholes Funded by Public Money",
];

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function convert_millions(num) {
  if (num >= 1000000) {
    return (
      convert_millions(Math.floor(num / 1000000)) +
      " million " +
      convert_thousands(num % 1000000)
    );
  } else {
    return convert_thousands(num);
  }
}

function convert_thousands(num) {
  if (num >= 1000) {
    return (
      convert_hundreds(Math.floor(num / 1000)) +
      " thousand " +
      convert_hundreds(num % 1000)
    );
  } else {
    return convert_hundreds(num);
  }
}

function convert_hundreds(num) {
  if (num > 99) {
    return ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100);
  } else {
    return convert_tens(num);
  }
}

function convert_tens(num) {
  if (num < 10) return ones[num];
  else if (num >= 10 && num < 20) return teens[num - 10];
  else {
    return tens[Math.floor(num / 10)] + " " + ones[num % 10];
  }
}

function convert(num) {
  if (num == 0) return "zero";
  else return convert_millions(num);
}

function varyRate(rate) {
  var opts = [
    rate,
    rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    convert(rate),
  ];
  var dollars = [`$${rand([opts[0], opts[1]])}`, `${rand(opts)} dollars`];
  return rand(dollars);
}
function payrollText(jobs, rate) {
  var opts = [
    `${rand(paying)} ${jobs} ${rand(employees)} ${varyRate(rate)} each`,
    `${jobs} ${rand(employees)} ${rand(getting)} ${varyRate(rate)} each`,
  ];
  return rand(opts);
}
function feeText(fee, type) {
  // paying X dollars on their mortgage
  // X dollars on their mortgage getting paid off
  var opts = [
    `${rand(paying_off)} ${varyRate(fee)} of their ${type}`,
    `${varyRate(fee)} of their ${type} getting ${rand(paid_off)}`,
  ];
  var opt = rand(opts);
  if (rand([true, false])) {
    opt = opt + `. ${rand(are)} ${rand(pay)} my ${type} ${rand(too)}?`;
  }
  return opt;
}
function insText(jobs, amt) {
  // # paying X employees X dollars each for insurance
  // # X employees getting X dollars each in health insurance
  var rate = Math.floor(amt / jobs);
  var opts = [
    `${rand(paying)} ${jobs} ${rand(employees)} ${varyRate(
      rate
    )} each for ${rand(insurance)}`,
    `${jobs} ${rand(employees)} ${rand(getting)} ${varyRate(
      rate
    )} each for ${rand(insurance)}`,
  ];
  var opt = rand(opts);
  if (rand([true, false])) {
    opt =
      opt + `. ${rand(are)} ${rand(pay)} my ${rand(insurance)} ${rand(too)}?`;
  }
  return opt;
}
function soloText(amt) {
  //   # one person getting paid X dollars
  // # one person paying themselves X dollars
  // # one employee pocketing X dollars
  // # ADD: can I get X dollars?
  var opts = [
    `${rand(single)} ${rand(person)} ${rand(getting)} ${varyRate(amt)}`,
    `${rand(single)} ${rand(person)} ${rand(paying)} themselves ${varyRate(
      amt
    )}`,
  ];
  var opt = rand(opts);
  if (rand([true, false])) {
    opt = opt + `. ${rand(are)} give me ${varyRate(amt)} ${rand(too)}?`;
  }
  return opt;
}
function zeroText(amt) {
  var opts = [
    `${rand(paying)} a ${rand(company)} with ${rand(zero)} ${rand(
      employees
    )} ${varyRate(amt)}`,
    `a ${rand(company)} with ${rand(zero)} ${rand(employees)} ${rand(
      getting
    )} ${varyRate(amt)}`,
  ];
  return rand(opts);
}
function franchiseText(parent, amt) {
  //   # paying a franchise of X could get X dollars
  // # a franchise of X getting a grant of X dollars
  var opts = [
    `${rand(paying)} a ${parent} ${rand(franchise)} ${varyRate(amt)}`,
    `a ${rand(franchise)} of ${parent} ${rand(getting)} ${varyRate(amt)}`,
  ];
  return rand(opts);
}

window.writePppMail = function () {
  fetch(
    "https://gist.githubusercontent.com/soapia/2df75046657410395250f8569ef91af1/raw/c24220c1cf6913d87d9a36c2050384b873ed2c63/ppp.json"
  )
    .then((response) => response.json())
    .then((data) => {
      var item = data[Math.floor(Math.random() * data.length)];
      var issues = item.Issues;
      var companyName = item.BorrowerName;
      var franchiseName = item.FranchiseName;
      var jobsReported = Number(item.JobsReported).toFixed(0);
      var utilitiesAmt = Number(item.UTILITIES_PROCEED).toFixed(0);
      var payrollAmt = Number(item.PAYROLL_PROCEED).toFixed(0);
      var mortgageAmt = Number(item.MORTGAGE_INTEREST_PROCEED).toFixed(0);
      var rentAmt = Number(item.RENT_PROCEED).toFixed(0);
      var healthAmt = Number(item.HEALTH_CARE_PROCEED).toFixed(0);
      var forgivenAmt = Number(item.ForgivenessAmount).toFixed(0);
      var ratio = Number(item["Pay Ratio"]).toFixed(0);

      var issue = issues[Math.floor(Math.random() * issues.length)];
      var purpose = "";
      switch (issue) {
        case "PAYROLL":
          purpose = payrollText(jobsReported, ratio);
          break;
        case "MORTGAGE":
          purpose = feeText(mortgageAmt, "mortgage");
          break;
        case "RENT":
          purpose = feeText(rentAmt, "rent");
          break;
        case "UTILITIES":
          purpose = feeText(utilitiesAmt, "utilities");
          break;
        case "HEALTH":
          purpose = insText(jobsReported, healthAmt);
          break;
        case "ONE PERSON":
          purpose = soloText(forgivenAmt);
          break;
        case "ZERO PPL":
          purpose = zeroText(forgivenAmt);
          break;
        case "FRANCHISE":
          purpose = franchiseText(franchiseName, forgivenAmt);
          break;
        case "TOO MUCH":
          purpose = `${rand(what)}`;
          break;
      }
      //     # hey doge can you let me know why [X DOLLARS] of hard-earned taxpayer money went to [X COMPANY] just so the money could go to [X PURPOSE]?
      // # the government wasn’t very efficient when they let [X COMPANY] get a [X DOLLAR] ppp loan AND get it forgiven when they just used the money to [X PURPOSE]. you should investigate that!
      var letters = [
        // option 1:
        `${rand(are)} ${rand(lmk)} why ${varyRate(forgivenAmt)} of ${rand(
          earned
        )} ${rand(tax)} ${rand(went)} ${companyName} ${rand(
          so_that
        )} ${purpose}`,
        // option 2 GETS CUT OFF
        `The government ${rand(wasnt)} ${rand(very)} efficient ${rand(
          when_you)} let ${companyName} get a ${varyRate(forgivenAmt)} ${rand(ppp)} loan ${rand(which)} forgiven, ${rand(so_that)} ${purpose}`,
      ];
      // console.log(rand(letters));
      var emailBody = rand(letters);
      var emailSubject = rand(emailSubjects);
      var recipientEmail = "DOGE@mail.house.gov";

      // Encode the subject and body to ensure special characters are handled correctly
      // var mailtoLink =
      //   "mailto:" +
      //   recipientEmail +
      //   "?subject=" +
      //   encodeURIComponent(emailSubject) +
      //   "&body=" +
      //   encodeURIComponent(emailBody);

      const encodedBody = encodeURIComponent(emailBody);
      const encodedSubject = encodeURIComponent(emailSubject);
      const mailtoLink = `mailto:DOGE@mail.house.gov?subject=${encodedSubject}&body=${encodedBody}`;

      // Open the user's default email client with the pre-filled subject and body
      window.location.href = mailtoLink;
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error:", error);
    });
};
