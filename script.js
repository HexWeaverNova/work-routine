// 工作进度热力图渲染
document.addEventListener('DOMContentLoaded', async function() {
    // 从workload.json加载数据
    let workloadData;
    try {
        const response = await fetch('workload.json');
        workloadData = await response.json();
    } catch (error) {
        console.error('加载工作数据失败:', error);
        return;
    }

    const heatmap = document.getElementById('heatmap');
    const year = '2025';
    const month = '05';
    const daysInMonth = 31; // 5月有31天

    // 确保数据存在
    if (!workloadData[year] || !workloadData[year][month]) {
        console.error('无效的工作数据');
        return;
    }

    // 创建月份标签
    const monthLabel = document.createElement('div');
    monthLabel.className = 'month-label';
    monthLabel.textContent = `${year}年${month}月`;
    heatmap.appendChild(monthLabel);

    // 创建每日方块
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        
        // 检查是否为工作日
        if (workloadData[year][month].includes(day)) {
            dayElement.classList.add('worked');
        }

        heatmap.appendChild(dayElement);
    }
});
