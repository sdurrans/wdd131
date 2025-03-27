const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;


const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        { section: "001", enrolled: 15, instructor: "brother tatum" },
        { section: "002", enrolled: 10, instructor: "brother Smith" },]
};

function setCourseInformation(course) {
    document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`;
}

function sectionTemplate(section) {
    return `<tr>
    <td>${section.section}</td>
    <td>${section.enrolled}</td>
    <td>${section.instructor}</td>
  </tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections tbody").innerHTML = html.join("");
}

setCourseInformation(aCourse);
renderSections(aCourse.sections);
