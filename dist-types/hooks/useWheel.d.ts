interface UseWheelOptions {
    ref: React.RefObject<HTMLElement | null>;
    sectionCount: number;
    startIndex?: number;
    onSectionChange?: (index: number) => void;
}
export declare function useWheel({ ref, sectionCount, startIndex, onSectionChange }: UseWheelOptions): void;
export {};
