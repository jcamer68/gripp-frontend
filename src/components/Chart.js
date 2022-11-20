import React from 'react';
import { Category, ChartComponent, ColumnSeries, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';

const Chart = ({data, xname, yname, name}) => {
    console.log(data)
    const primaryxAxis = { valueType: 'Category' };
    return <ChartComponent id="charts" primaryXAxis={primaryxAxis}>
        <Inject services={[ColumnSeries, Tooltip, LineSeries, Category]} />
        <SeriesCollectionDirective>
            <SeriesDirective dataSource={data} xName={xname} yName={yname} name={name} />
        </SeriesCollectionDirective>
    </ChartComponent>;
};

export default Chart;