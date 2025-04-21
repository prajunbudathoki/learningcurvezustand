export default function Cart() {
    return (
      <div className="h-fit w-[20%] bg-neutral-200 flex flex-col gap-y-2 p-2 rounded-md">
        <h3 className="text-[16px] text-neutral-950 font-semibold border-b border-neutral-400 pb-2">
          Cart:
        </h3>
        <ul>
          <li className="text-[0.9rem] text-neutral-800 flex justify-between">
            <p>Product</p>
            <div className="flex items-center gap-x-2">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <p>20</p>
          </li>
        </ul>
        <div className="text-[0.9rem] text-neutral-900 font-medium flex justify-between border-t border-dashed border-neutral-400 pt-2">
          <p>Total item:</p>
          <p>Total Price:</p>
        </div>
      </div>
    );
  }