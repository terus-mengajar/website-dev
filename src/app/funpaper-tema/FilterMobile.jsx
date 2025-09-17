import Filter from "./Filter";
import { X } from "lucide-react";

export default function FilterMobile({
  selectedUsia,
  toggleCheckboxUsia,
  onClose,
}) {
  return (
    <div className="fixed left-0 right-0 top-0 pt-8 px-8 z-1001 bg-white overflow-y-auto max-h-[80vh]">
      <button onClick={onClose} className="mb-4 font-bold absolute right-9 mt-1">
        <X size={18} />
      </button>
      <Filter
        selectedUsia={selectedUsia}
        toggleCheckboxUsia={toggleCheckboxUsia}
      />
    </div>
  );
}
