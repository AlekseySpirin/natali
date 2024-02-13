// export default function combineArrays(...arrays) {
// 	return arrays.map(array => [...array]);
// }

export default function combineArrays(...objects) {
	return objects.reduce((acc, obj) => {
		if (Array.isArray(obj)) {
			// Если объект является массивом, добавляем его элементы к общему массиву
			acc.push(...obj);
		} else {
			// Если объект не является массивом, добавляем его целиком к общему массиву
			acc.push(obj);
		}
		return acc;
	}, []);
}
