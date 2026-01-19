import {defineField, defineType} from 'sanity'
import {BugIcon} from '@sanity/icons'

export const problems = defineType({
  name: 'problems',
  title: 'Проблема',
  type: 'document',
  groups: [
    {name: 'ua', title: 'Українська'},
    {name: 'en', title: 'English'},
    {name: 'de', title: 'Deutsch'},
  ],
  icon: BugIcon,
  fields: [
    defineField({
      name: 'img',
      type: 'image',
      options: {
        hotspot: true,
      },
      title: 'Картинка',
      group: ['ua', 'en', 'de'],
      validation: (Rule) => Rule.required().error('Виберіть фотографію, це поле є обов’язковим'),
    }),
    defineField({
      name: 'problemIcon',
      title: 'Іконка Проблеми',
      type: 'reference',
      to: {type: 'icons'},
      group: ['ua', 'en', 'de'],
      validation: (Rule) => Rule.required().error('Виберіть іконку, це поле є обов’язковим'),
    }),
    defineField({
      name: 'arrowIcon',
      title: 'Іконка Стрілки',
      type: 'reference',
      to: {type: 'icons'},
      group: ['ua', 'en', 'de'],
      validation: (Rule) => Rule.required().error('Виберіть іконку, це поле є обов’язковим'),
    }),
    defineField({
      name: 'problem_content_ua',
      title: 'Зміст проблеми',
      type: 'object',
      group: 'ua',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Заголовок',
          validation: (Rule) => Rule.max(30).error('Заголовок занадто довгий'),
        },
        {
          name: 'desc',
          type: 'text',
          title: 'Опис',
          validation: (Rule) => Rule.max(200).error('Текст не може перевищувати 200 символів'),
        },
      ],
    }),

    defineField({
      name: 'solution_content_ua',
      title: 'Вирішення проблеми',
      type: 'object',
      group: 'ua',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Заголовок',
          validation: (Rule) => Rule.max(30).error('Заголовок занадто довгий'),
        },
        {
          name: 'desc',
          type: 'text',
          title: 'Опис',
          validation: (Rule) => Rule.max(200).error('Текст не може перевищувати 200 символів'),
        },
      ],
    }),
    defineField({
      name: 'problem_content_en',
      title: 'The content of the problem',
      type: 'object',
      group: 'en',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => Rule.max(30).error('Заголовок занадто довгий'),
        },
        {
          name: 'desc',
          type: 'text',
          title: 'Description',
          validation: (Rule) => Rule.max(200).error('Текст не може перевищувати 200 символів'),
        },
      ],
    }),
    defineField({
      name: 'solution_content_en',
      title: 'Problem solving',
      type: 'object',
      group: 'en',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => Rule.max(30).error('Заголовок занадто довгий'),
        },
        {
          name: 'desc',
          type: 'text',
          title: 'Description',
          validation: (Rule) => Rule.max(200).error('Текст не може перевищувати 200 символів'),
        },
      ],
    }),
    defineField({
      name: 'problem_content_de',
      title: 'Probleminhalt',
      type: 'object',
      group: 'de',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Titel',
          validation: (Rule) => Rule.max(30).error('Заголовок занадто довгий'),
        },
        {
          name: 'desc',
          type: 'text',
          title: 'Beschreibung',
          validation: (Rule) => Rule.max(200).error('Текст не може перевищувати 200 символів'),
        },
      ],
    }),
    defineField({
      name: 'solution_content_de',
      title: 'Problemlösung',
      type: 'object',
      group: 'de',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Titel',
          validation: (Rule) => Rule.max(30).error('Заголовок занадто довгий'),
        },
        {
          name: 'desc',
          type: 'text',
          title: 'Beschreibung',
          validation: (Rule) => Rule.max(200).error('Текст не може перевищувати 200 символів'),
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'problem_content_ua.title',
    },

    prepare(selection) {
      const {title} = selection
      return {
        title: title || 'Нова проблема (пусто)',
      }
    },
  },
})
