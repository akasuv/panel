const recursiveRendering = (
  element: string | { [key: string]: string | Record<string, string> }
) => {
  if (typeof element === "object") {
    return Object.keys(element).map((item) => {
      return (
        <div className="form-control w-full max-w-xs">
          {typeof element[item] === "object" ? (
            <div className="divider">{item}</div>
          ) : (
            <label className="label">
              <span className="label-text">{item}</span>
            </label>
          )}
          {recursiveRendering(element[item])}
        </div>
      );
    });
  }

  return (
    <input
      type="text"
      placeholder="Type here"
      className="input input-bordered w-full max-w-xs"
      value={element}
    />
  );
};

const Config = ({
  element,
}: {
  element: string | { [key: string]: string | Record<string, string> };
}) => {
  return <>{recursiveRendering(element)}</>;
};

export default Config;
