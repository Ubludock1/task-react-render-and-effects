import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect, useCallback } from 'react';

export function Effects(props: { sourceId: string }) {
    const [Id, setId] = useState(props.sourceId);
    const [Mes, setMes] = useState(-1);
    const [save, setSave] = useState(function () {
        return function (mes: number) {
            return setMes(mes);
        };
    });

    useEffect(() => {
        subscribe(props.sourceId, save);
        setId(props.sourceId);
        setMes(-1);
        return () => {
            unsubscribe(props.sourceId, save);
        };
    }, [props.sourceId]);
    return (
        <div>
            {Id}: {Mes}
        </div>
    );
}
