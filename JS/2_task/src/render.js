

export const render = {

    init: () => {

        render.elements.loadElements();
    },

    templates: {
        totalTemplate: (value) => {
            return `<tr>
                <td>${render.formatter(value)}</td>
            </tr>`;
        },
        averageTemplate: (colName, value) => {
            
            return `<tr>
                <td>${colName}</td>
                <td>${render.formatter(value)}</td>
            </tr>`;
        }
    },

    render: {

        renderAllItems: (total, averageByMonth, averageByDep) => {
            render.render.renderTotal(total);

            render.render.renderAverageByTypeInElement(averageByMonth, 'month', render.elements.averageByMonthTable);
            render.render.renderAverageByTypeInElement(averageByDep, 'department', render.elements.averageByDepTable);

        },
        renderTotal: (value) => {
            render.elements.totalTable.innerHTML = render.templates.totalTemplate(value);
        },
        renderAverageByTypeInElement: (average, type, element) => {
            const template = average.reduce(
                (temp, item) => { return temp += render.templates.averageTemplate(item[type], item.average) },
                ''
            );
            element.innerHTML = template;
        },
    },

    elements: {
        totalTable:          '#total tbody',
        averageByMonthTable: '#averageByMonth tbody',
        averageByDepTable:   '#averageByDep tbody',

        loadElements: () => {
            render.elements.totalTable          = document.querySelector(render.elements.totalTable);
            render.elements.averageByMonthTable = document.querySelector(render.elements.averageByMonthTable);
            render.elements.averageByDepTable   = document.querySelector(render.elements.averageByDepTable);
        }
    },

    formatter: (value) => {
        return Intl.NumberFormat('ua-UA').format(value);
    }
}
