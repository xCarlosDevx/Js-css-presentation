const container = document.getElementById("container");
const child = container.children;
i = 1;
function onNext() {
  container.scrollBy({
    left: child[i].offsetLeft - child[i - 1].offsetLeft,
    behavior: "smooth",
  });
}
function onBack() {
  container.scrollBy({
    left: child[i].offsetLeft - child[i + 1].offsetLeft,
    behavior: "smooth",
  });
}
