export function formattedDateTime(dateString: number | string | null | undefined) {
  if (typeof dateString !== 'string') {
    return '01.01.2000, 00:00';
  }

  return new Date(dateString)
    .toLocaleDateString('uk-UA', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
    .replace(/\./g, '.');
}
