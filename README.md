# Incorrect Shallow Comparison in useEffect Leads to Infinite Loop

This example demonstrates a common mistake in React's `useEffect` hook: using a shallow comparison of objects, which can lead to infinite loops.  The `useEffect` hook is designed to perform side effects, but when the comparison logic within it is flawed, it can cause unexpected and potentially severe issues. This example illustrates this problem and offers a working solution.

## Problem

The `useEffect` hook is intended to run only when specified dependencies change.  However, if we're directly comparing objects without checking their content, any change in object reference (even if the content remains the same) will be detected as a change by the shallow comparison.  This leads to an infinite loop as the `useEffect` keeps triggering itself with each re-render.

## Solution

To solve this, the solution uses a technique called "deep comparison" or a library that handles object equality effectively.  Here, we are using `JSON.stringify` to compare the objects, which gives a reliable comparison of the values irrespective of the reference change. This ensures that `useEffect` only executes when the value of `count` changes and avoids the infinite loop.  Another alternative could be to use a dedicated equality check library such as Lodash's `isEqual` function.