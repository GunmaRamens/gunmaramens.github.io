import classNames from "clsx";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

type HeadingProps = DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
> & {
    level: 1 | 2 | 3 | 4 | 5;
};

export default function Heading(props: HeadingProps) {
    const level = props.level;
    const propsWothoutLevelAndClassName = {
        ...props,
        level: undefined,
        className: undefined,
    };
    const cn = classNames("prose", "max-w-full", props.className);

    const headingTag =
        level === 1 ? (
            <h1
                {...propsWothoutLevelAndClassName}
                className={classNames(cn, "prose-2xl")}
            />
        ) : level === 2 ? (
            <h2
                {...propsWothoutLevelAndClassName}
                className={classNames(cn, "prose-xl")}
            />
        ) : level === 3 ? (
            <h3
                {...propsWothoutLevelAndClassName}
                className={classNames(cn, "prose-lg")}
            />
        ) : level === 4 ? (
            <h4
                {...propsWothoutLevelAndClassName}
                className={classNames(cn, "prose-base")}
            />
        ) : level === 5 ? (
            <h5
                {...propsWothoutLevelAndClassName}
                className={classNames(cn, "prose-sm")}
            />
        ) : (
            <></>
        );

    return headingTag;
}
