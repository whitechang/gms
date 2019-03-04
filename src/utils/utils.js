export default {
    formateDate(time) {
        if (!time) return '';
        let date = new Date(time);
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    },
    pagination(data, callback) {
        let page = {
            onChange: (current) => {
                callback(current);
            },
            current: data.page,
            pageSize: data.page_size,
            total: data.total_count,
            showTotal: () => {
                return `共${data.total_count}条`
            },
            showQuickJumper: true
        }
        return page;
    }
}