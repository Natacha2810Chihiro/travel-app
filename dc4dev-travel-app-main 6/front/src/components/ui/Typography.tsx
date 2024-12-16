type TypographyProps = {
    children: React.ReactNode
    level: 1 | 2 | 3 | 4 | 5 | 6
}

const style = {
    1: "text-4xl my-10",
    2: "text-3xl my-8",
    3: "text-2xl my-4",
    4: "text-xl my-3",
    5: "text-lg my-3",
    6: "text-base my-3",
}

const Typography = ({ children, level , ...rest}: TypographyProps) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements

    return ( 
        <Tag
            className={`${style[level]} font-bold text-red-400`}
            {...rest}
        >
            {children}
        </Tag>
     );
}
 
export default Typography;