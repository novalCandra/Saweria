import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React from "react";
function RadioFormSignup() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Label>
          <Checkbox />
          Accept Terms
        </Label>
      </div>
    </>
  );
}

export default RadioFormSignup;
