interface UseKeyboardOptions {
    ref: React.RefObject<HTMLElement | null>;
    sectionCount: number;
    startIndex?: number;
    onSectionChange?: (index: number) => void;
}
export declare function useKeyboard({ ref, sectionCount, startIndex, onSectionChange, }: UseKeyboardOptions): void;
export {};
