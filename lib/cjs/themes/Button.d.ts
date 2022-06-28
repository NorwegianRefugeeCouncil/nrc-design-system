declare const _default: {
    baseStyle: {
        _text: {
            [x: string]: any;
        };
        borderRadius: string;
        height: string;
        paddingLeft: string;
        paddingRight: string;
    };
    variants: {
        major: ({ colorScheme }: any) => {
            backgroundColor: string;
            _text: {
                color: string;
            };
            _hover: {
                backgroundColor: string;
                _text: {
                    color: string;
                };
            };
            _disabled: {
                backgroundColor: string;
                _text: {
                    color: string;
                };
            };
            _pressed: {
                backgroundColor: string;
                _text: {
                    color: string;
                };
            };
            _focus: {
                backgroundColor: string;
                _text: {
                    color: string;
                };
            };
        };
        minor: ({ colorScheme }: any) => {
            backgroundColor: string;
            _text: {
                color: string;
            };
            borderWidth: number;
            borderStyle: string;
            borderColor: string;
            _hover: {
                backgroundColor: string;
                borderColor: string;
                _text: {
                    color: string;
                };
            };
            _disabled: {
                backgroundColor: string;
                borderColor: string;
                _text: {
                    color: string;
                };
            };
            _pressed: {
                backgroundColor: string;
                borderWidth: number;
                _text: {
                    color: string;
                };
            };
            _focus: {
                backgroundColor: string;
                borderWidth: number;
                _text: {
                    color: string;
                };
            };
        };
    };
};
export default _default;
