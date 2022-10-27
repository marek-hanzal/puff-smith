/**
 * Few methods related to arrays.
 */
export class ArrayUtils {
    /**
     * Return difference between the two arrays.
     *
     * @param alfa
     * @param beta
     */
    static diff<T>(alfa: T[], beta: T[] = []): T[] {
        return alfa.filter(x => !beta.includes(x));
    }

    /**
     * Return intersection of the two arrays.
     *
     * @param alfa
     * @param beta
     */
    static intersect<T>(alfa?: T[], beta?: T[]): T[] {
        if (!alfa || !beta) {
            return [];
        }
        return alfa.filter(x => beta.includes(x));
    }

    static uniqueOf<T>(array: T[], key?: keyof T): T[] {
        return key ? [
            ...new Map(array.map(item => [
                item[key],
                item
            ])).values()
        ] : [...new Set(array)];
    }
}
