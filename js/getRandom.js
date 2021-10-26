//Функция генератор случайных чисел
export const getRandom= (num) => {
    return Math.floor(Math.random() * (num - 1) + 1);
}