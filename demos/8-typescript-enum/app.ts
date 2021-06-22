enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

function isItSummber(month: Month) {
  let isSummber: boolean;

  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummber = true;
      break;
    default:
      isSummber = false;
      break;
  }

  return isSummber;
}

console.log(isItSummber(Month.Jun));
console.log(isItSummber(6));

enum ApprovalStatus {
  draft,
  submitted,
  approved,
  rejected,
}

const request = {
  id: 1,
  status: ApprovalStatus.approved,
  description: 'Please approve this request',
};

if (request.status === ApprovalStatus.approved) {
  console.log('Send email to the Applicant...');
}
