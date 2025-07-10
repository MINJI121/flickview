interface UseFlickControllerOptions {
    sectionCount: number;
    startIndex?: number;
    onSectionChange?: (index: number) => void;
}
export declare function useFlickController(ref: React.RefObject<HTMLElement | null>, { sectionCount, startIndex, onSectionChange }: UseFlickControllerOptions): {
    currentIndex: import("react").RefObject<number>;
    scrollToSection: (index: number) => void;
};
export {};
