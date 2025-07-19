# Flickview

**flickview** is a full-page scroll utility for React that allows screen transitions by section, based on **wheel**, **keyboard**, and **touch** input.

Designed with user experience and scalability in mind, it enables smooth section-by-section navigation with minimal setup.

<br/>

## Installation

```bash
npm install flickview
```

<br/>

## Basic usage

```tsx
import { FlickView } from 'flickview';

function App() {
  return (
    <FlickView>
      <section>Section 1</section>
      <section>Section 2</section>
      <section>Section 3</section>
    </FlickView>
  );
}
```

<br/>

## Props

| 이름              | 타입                      | 설명                                                        |
| ----------------- | ------------------------- | ----------------------------------------------------------- |
| `startIndex`      | `number`                  | Index of the section to show on initial render (default: 0) |
| `onSectionChange` | `(index: number) => void` | Callback function fired when the section changes            |

<br/>

## Using individual hooks

```tsx
import { useWheel, useFlickController } from 'flickview';

const { scrollToSection, currentIndex } = useFlickController(containerRef, {
  startIndex: 0,
  onSectionChange: (i) => console.log(i),
  sectionCount: 5,
});

useWheel({ ref: containerRef, scrollToSection, currentIndex, sectionCount: 5 });
```

<br/>

## Build environment

- Supports both ESM and CommonJS module formats (exports.import, exports.require)

- Includes .d.ts type definition files (exports.types)

- Built using Vite + TypeScript Compiler, with separated output directories (dist, dist-types)
