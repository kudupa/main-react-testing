import { renderHook, act } from "../../../test-utils";
import useCounter from "./useCounter";

describe("useCounter", () => {
  it("Should render initial count", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    expect(typeof result.current.increment).toBe("function");
  });

  it("Should increment the count to one", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
    act(result.current.increment);
    expect(result.current.count).toBe(1);
    act(result.current.decrement);
    expect(result.current.count).toBe(0);
  });
});
