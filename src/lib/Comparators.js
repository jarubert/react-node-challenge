export function dateCompare(valueA, valueB) {
    if ((valueA && !valueB) || valueA > valueB) {
        // If A has a value but B doesn't A should win.
        return 1;
    } else if ((valueB && !valueA) || valueA < valueB) {
        // If B has a value but A doesn't B should win.
        return -1;
    } else {
        return 0;
    }
}

export function textCompare(valueA, valueB) {
    if (!valueA && !valueB) {
        return 0;
    } else if (!valueA) {
        return 1;
    } else if (!valueB) {
        return -1;
    } else {
        // Otherwise, sort alphabetically
        return String(valueA).localeCompare(String(valueB));
    }
}

export function sortDirection(sortValue, ascending) {
    return sortValue * (ascending ? 1 : -1);
}
