declare const textTheme: {
    defaultProps: {
        level: string;
        variant: string;
    };
    baseStyle: {
        textAlign: string;
        color: string;
        fontFamily: string;
        fontStyle: string;
    };
    variants: {
        display: (props: Record<string, any>) => {
            [x: string]: any;
        };
        heading: (props: Record<string, any>) => {
            [x: string]: any;
        };
        body: (props: Record<string, any>) => {
            [x: string]: any;
        };
        caption: (props: Record<string, any>) => {
            [x: string]: any;
        };
        inline: (props: Record<string, any>) => {
            [x: string]: any;
        };
        label: (props: Record<string, any>) => {
            [x: string]: any;
        };
    };
};
export default textTheme;
