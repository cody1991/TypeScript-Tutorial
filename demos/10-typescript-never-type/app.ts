function raiseError(message: string): never {
  throw new Error(message);
}

let loop = function forever() {
  while (true) {
    console.log("hello");
  }
};

function reject() {
  return raiseError("Rejected");
}

function fn(a: string | number): boolean {
  if (typeof a === "string") return true;
  else if (typeof a === "number") return false;
  return neverOccur();
}

let neverOccur = () => {
  throw new Error("Never!");
};
