import React from "react";

import { getRange } from "../../lib/utils/math";
import classNames from "classnames";
import Image from "next/image";

export interface NavigationButtonProps {
  disabled?: boolean;
  arrow: "left" | "right";
  onClick: () => void;
}
export function NavigationButton({
  disabled,
  arrow,
  onClick,
}: NavigationButtonProps) {
  const buttonClasses = classNames(
    "flex",
    "items-center",
    "justify-center",
    "w-[40px]",
    "h-[40px]",
    "rounded-full",
    "transition-opacity",
    "ease-in",
    "mr-[16px]",
    "hover:opacity-75",
    {
      "bg-[#FFFFFF0A]": !disabled,
      "opacity-24 cursor-default": disabled,
    }
  );

  const renderArrow = (flavor: "left" | "right") => {
    const flavors = {
      left: () => (
        <Image
          src="/icons/arrow-left.svg"
          alt="Left arrow"
          width={16}
          height={16}
        />
      ),
      right: () => (
        <Image
          src="/icons/arrow-right.svg"
          alt="Right arrow"
          width={16}
          height={16}
        />
      ),
    };
    return flavors[flavor];
  };

  return (
    <div role="button" onClick={onClick} className={buttonClasses}>
      {renderArrow(arrow)()}
    </div>
  );
}

// const PaginationItem = styled.div<{ active: boolean; width: string }>`
//   flex: 1;
//   height: 4px;
//   border-radius: 1px;
//   margin-right: 16px;
//   transition: background 0.2s ease-out, box-shadow 0.2s ease-out;

//   ${(props) => {
//     if (props.active) {
//       return `
//         background: ${colors.primaryText};
//         box-shadow: 2px 4px 24px ${colors.primaryText};
//       `;
//     }

//     return `
//       background: ${colors.primaryText}14;
//       box-shadow: none;
//     `;
//   }}

//   &:last-child {
//     margin-right: 0px;
//   }
// `;

export function PaginationItem({ active, width, onClick }) {
  const itemClasses = classNames(
    "flex",
    "h-[4px]",
    "w-[50px]",
    "rounded",
    "transition-background",
    "transition-shadow",
    "ease-out",
    "mr-[16px]",
    {
      "bg-[#FFFFFF]": active,
      "shadow-[rgb(255,255,255)_2px_4px_24px]": active,
      // [`w-[${width}]`]: true, // You can add dynamic width classes if needed
    }
  );

  return <div role="button" onClick={onClick} className={itemClasses}></div>;
}

interface SegmentPaginationProps {
  page: number;
  total: number;
  onPageClick: (page: number) => void;
  config?: {
    showNavigationButton?: boolean;
  };
}

const SegmentPagination: React.FC<SegmentPaginationProps> = ({
  page,
  total,
  onPageClick,
  config: { showNavigationButton = true } = {},
}) => {
  return (
    <div className="w-100 flex items-center justify-around">
      {showNavigationButton && (
        <NavigationButton
          arrow="left"
          disabled={page <= 1}
          onClick={() => {
            if (page <= 1) {
              return;
            }
            onPageClick(page - 1);
          }}
        />
      )}
      {getRange(1, total, 1).map((item) => (
        <PaginationItem
          key={item}
          active={item === page}
          onClick={() => {
            onPageClick(item);
          }}
          width={`20px`}
          //  width={`calc(100%/3)`}
        />
      ))}
      {showNavigationButton && (
        <NavigationButton
          arrow="right"
          disabled={page >= total}
          onClick={() => {
            if (page >= total) {
              return;
            }
            onPageClick(page + 1);
          }}
        />
      )}
    </div>
  );
};

export default SegmentPagination;
