const languages = ["Python", "C++", "C#", "PHP"];
const searchLang = "Java Script";

if (!languages.includes(searchLang)) {
  console.log(`Значення ${searchLang} в списку немає, додаємо в масив`);
  languages.push(searchLang);
}
