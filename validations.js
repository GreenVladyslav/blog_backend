import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
];

export const registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
  body('fullName', 'Укажите имя').isLength({ min: 5 }),
  body('avatarUrl', 'Неверная ссылка на автарку').optional().isURL(),
];

export const postCreateValidation = [
  body('title', 'Введите залоголовк статьи').isLength({ min: 3 }).isString(),
  body('text', 'Введите текст статьи').isLength({ min: 3 }).isString(),
  body('tags', 'Неверный формат тегов (укажите массив)').optional().isString(),
  body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];

// optional() - если же придет запрос то проверь (явл ли он ссылкой) если нет ничего страшного
// isURL()- явл ли ссылкой
