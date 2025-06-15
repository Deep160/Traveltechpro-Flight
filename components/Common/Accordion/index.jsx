import Accordion from "react-bootstrap/Accordion";
import styles from "./accordion.module.scss";

export default function AccordionType({
  moduleClass,
  className,
  children,
  ...rest
}) {
  return (
    <Accordion className={`${className} ${styles[moduleClass]}`} {...rest}>
      {children}
    </Accordion>
  );
}

export function AccordionItem({ children, eventKey, ...rest }) {
  return (
    <Accordion.Item eventKey={eventKey} {...rest}>
      {children}
    </Accordion.Item>
  );
}

export function AccordionHeader({ children, ...rest }) {
  return (
    <Accordion.Header {...rest}>
      {children}
      <span className="arrow-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
        >
          <g clipPath="url(#clip0_1_10)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.88138 13.4544C10.0455 13.6185 10.268 13.7106 10.5 13.7106C10.732 13.7106 10.9545 13.6185 11.1186 13.4544L16.0685 8.50456C16.1521 8.42384 16.2187 8.32729 16.2646 8.22054C16.3105 8.11379 16.3346 7.99897 16.3356 7.88279C16.3366 7.7666 16.3145 7.65139 16.2705 7.54385C16.2265 7.43632 16.1615 7.33862 16.0794 7.25646C15.9972 7.17431 15.8995 7.10934 15.792 7.06534C15.6844 7.02135 15.5692 6.99921 15.453 7.00022C15.3368 7.00123 15.222 7.02536 15.1153 7.07122C15.0085 7.11708 14.912 7.18374 14.8313 7.26731L10.5 11.5986L6.16876 7.26731C6.00373 7.10792 5.7827 7.01973 5.55328 7.02172C5.32386 7.02371 5.1044 7.11574 4.94216 7.27797C4.77993 7.4402 4.68791 7.65966 4.68592 7.88908C4.68392 8.11851 4.77212 8.33953 4.93151 8.50456L9.88138 13.4544Z"
              fill="#828282"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_10">
              <rect
                width="21"
                height="21"
                fill="white"
                transform="matrix(0 -1 1 0 0 21)"
              />
            </clipPath>
          </defs>
        </svg>
      </span>
    </Accordion.Header>
  );
}
export function AccordionBody({ children, ...rest }) {
  return <Accordion.Body {...rest}>{children}</Accordion.Body>;
}
