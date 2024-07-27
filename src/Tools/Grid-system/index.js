import "./style.css";
export const Col = ({ md, lg, sm, xl, xs, col, children, className }) => {
  return (
    <div
      className={`col-${col} col-lg-${lg} col-md-${md} col-xs-${xs} mb-2 col-sm-${sm} col-xl-${xl} ${className}`}
    >
      {children}
    </div>
  );
};
export const Row = ({ children, className, gap, justify }) => {
  return (
    <div className={`row ${"gap-" + gap} ${className} justify-${justify}`}>
      {children}
    </div>
  );
};
export const Container = ({ children }) => {
  return (
    <section className="pt-2">
      <div className="w-[95%] mx-auto container">{children}</div>
    </section>
  );
};
