/**
 * Function used to make a seo friendly urls
 * For example we transform this: 'Photosmart%20E317%20Digital%20Camera'
 * To this: 'photosmart-e317-digital-camera'
 *
 * @param rawString
 */
export function formatUrl(rawString: string): string {
  return rawString.toLowerCase().replace(/ /g, '-');
}
