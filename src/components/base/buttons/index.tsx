import React from "react";

type ButtonPropsType =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | any
  | {
      children?: React.ReactChild | React.ReactChild[];
      disabled?: boolean;
      color?: "red";
      modifier: string;
      sizes: string;
    };

export const Button = (props: ButtonPropsType) => {
  return (
    <button {...props} className={`button ${props.modifier}`}>
      {props.children}
    </button>
  );
};

export const SquareSharpButton = (props: ButtonPropsType) => {
  return <Button data-testid="squareSharpButton" {...props} modifier="button--squareSharp" />;
};

export const SizeInfoButton = (props: ButtonPropsType) => {
  return (
    <label data-testid="sizeInfoButton" className={`sizes sizes--${props.modifier}`}>
      <input
        className="sizes--input"
        type="radio"
        name="radio-size"
        value={props.value}
        onChange={props.onChange}
      />
      <span className={`checkmark checkmark--${props.modifier}`}>
        {props.sizes}
      </span>
    </label>
  );
};

export const LargeButton = (props: ButtonPropsType) => {
  return <Button data-testid="largeButton" {...props} modifier="button--large" />;
};


