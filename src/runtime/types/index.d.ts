declare global {
  interface Window {
    googleTranslateElementInit: () => void
    google: {
      translate: {
        TranslateElement: new (options: object, element: string) => void
      }
    }
  }
}
