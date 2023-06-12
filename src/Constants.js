const BASE_URL = "http://localhost:8080";

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  month: "long",
  day: "numeric",
});

const dateTimeFormatter = new Intl.DateTimeFormat("en-IN", {
  month: "long",
  day: "numeric",
  hour12: true,
  hour: "2-digit",
  minute: "2-digit",
});

let formatDate = (date) => dateFormatter.format(date);

let formatDateTime = (date) => dateTimeFormatter.format(date);

export { BASE_URL, formatDate, formatDateTime };
