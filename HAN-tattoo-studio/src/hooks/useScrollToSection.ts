/**
 * @file useScrollToSection.ts
 * @description Hook to provide smooth scrolling to page sections by id.
 */

/**
 * @description Returns a function that smoothly scrolls to a section by id.
 */
export const useScrollToSection = () => {
  /**
   * @description Smoothly scrolls the viewport to the element with the given id.
   * @param id - The DOM id of the target section element.
   */
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return scrollToSection
}
