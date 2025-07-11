import React from 'react';
interface FlickViewProps {
    children: React.ReactNode;
    startIndex?: number;
    onSectionChange?: (index: number) => void;
}
declare function FlickView({ children, startIndex, onSectionChange }: FlickViewProps): import("react/jsx-runtime").JSX.Element;
export default FlickView;
