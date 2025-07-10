interface UseTouchOptions {
    ref: React.RefObject<HTMLElement | null>;
    sectionCount: number;
    startIndex?: number;
    onSectionChange?: (index: number) => void;
}
export declare function useTouch({ ref, sectionCount, startIndex, onSectionChange }: UseTouchOptions): void;
export {};
