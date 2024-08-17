import StatusStyled from "./Status.module.css";

interface StatusProps {
  children: string;
  count: number;
}

const Status = ({ children, count }: StatusProps) => {
  return (
    <div className={`${StatusStyled.Status} `}>
      <p className={StatusStyled.statusLabel}>{children}</p>
      <p className={StatusStyled.countNum}>{count}</p>
    </div>
  );
};
export default Status;
