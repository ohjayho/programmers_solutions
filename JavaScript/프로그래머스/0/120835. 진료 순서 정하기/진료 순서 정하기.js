function solution(emergency) {
    const originalEmergency = [...emergency]
    const sortedEmergency = emergency.sort((a,b) => b-a);
    return originalEmergency.map((patient) => {
        return sortedEmergency.indexOf(patient) + 1
    });
}