const TAF_CONFIG = {
    x: 'x',
    y: 'y',
    w: 'width',
    l: 'length',
    yaw: 'psi_rad',
    frameId: 'frame_id',
    ts: 'timestamp_ms',
    type: 'agent_type',
    trackId: 'track_id',
    caseId: 'case_id',
}

export const props = {
    ...TAF_CONFIG,
}

export const crs = 'EPSG:4326'

export const typeColors = {
    'car': '#4FC3F7',
    'unclassified': '#fff9800',
    'pedestrian': '#BA68C8',
}